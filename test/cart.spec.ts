import { expect, Page, test } from '@playwright/test';

// 在每个测试运行之前都导航到指定页面
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

// 测试商品列表功能
test.describe('商品列表', () => {
  // 测试添加加载状态
  test('添加加载状态', async ({ page }) => {
    // 检查页面中是否有加载状态卡片，预期为8个
    test.expect(await page.getByTestId('loading-card').count()).toBe(8);
  });
});

// 测试购物车功能
test.describe('购物车', () => {
  // 测试添加商品后购物车图标显示商品数量
  test('点击添加到购物车后，购物车图标应当能够正确显示商品数量', async ({ page }) => {
    // 点击添加商品按钮
    const addProductBtn = page.locator('.ant-btn').first();
    await addProductBtn.click();

    // 获取购物车图标
    const cartIcon = page.getByRole('button', { name: 'shopping-cart' });

    // 检查购物车图标中是否包含商品数量为1
    await test.expect(cartIcon).toContainText('1');

    // 再次点击添加商品按钮
    await addProductBtn.click();

    // 检查购物车图标中是否包含商品数量为2
    await test.expect(cartIcon).toContainText('2');
  });

  // 测试点击购物车图标展示购物车
  test('点击购物车图标应当能够展示购物车', async ({ page }) => {
    // 获取购物车图标并点击
    const cartIcon = page.getByRole('button', { name: 'shopping-cart' });
    await cartIcon.click();

    // 检查购物车抽屉是否可见
    const cardDrawer = page.locator('.ant-drawer-mask');
    await test.expect(cardDrawer).toBeVisible();
  });

  // 测试刷新页面后购物车状态是否保持
  test('刷新页面后依然保持购物车状态', async ({ page }) => {
    // 添加商品到购物车并刷新页面
    const addProductBtn = page.locator('.ant-btn').first();
    await addProductBtn.click();
    await page.reload();

    // 检查购物车图标中是否包含商品数量为1
    const cartIcon = page.getByRole('button', { name: 'shopping-cart' });
    await test.expect(cartIcon).toContainText('1');

    // 点击购物车图标并检查购物车内容是否显示
    await cartIcon.click();
    await productShouldBeInCart(page);
  });

  // 测试点击关闭购物车图标关闭购物车
  test('点击关闭购物车图标应当能够关闭购物车', async ({ page }) => {
    // 点击购物车图标并检查购物车内容是否显示
    const cartIcon = page.getByRole('button', { name: 'shopping-cart' });
    await cartIcon.click();

    // 检查购物车抽屉是否可见
    const cartDrawer = page.locator('.ant-drawer-mask');
    await test.expect(cartDrawer).toBeVisible();

    // 点击关闭购物车图标
    const closeCartIcon = page.getByRole('button', { name: 'Close' });
    await closeCartIcon.click();

    // 检查购物车抽屉是否隐藏
    await test.expect(cartDrawer).not.toBeVisible();
  });

  // 测试添加删除商品功能
  test('应当能够正常添加删除商品', async ({ page }) => {
    // 添加商品到购物车并获取商品
    await addProductAndShowCart(page);
    const productInCart = await productShouldBeInCart(page);

    // 获取删除按钮并点击
    const removeBtn = page.getByRole('button', { name: '删除' });
    await removeBtn.click();

    // 检查商品是否隐藏
    await test.expect(productInCart).toBeHidden();
  });

  // 测试一次只能添加一件商品到购物车
  test('一次应当只添加一件商品到购物车', async ({ page }) => {
    // 添加商品到购物车
    await addProductAndShowCart(page);

    // 获取商品数量输入框中的值
    const number = await page.locator('.ant-input-number-input').inputValue();

    // 检查商品数量是否为1
    test.expect(number).toBe('1');
  });

  // 测试修改商品数量功能
  test('应当能够修改商品数量', async ({ page }) => {
    // 添加商品到购物车
    await addProductAndShowCart(page);

    // 获取商品数量相关元素并模拟增减数量操作
    const number = page.locator('.ant-input-number-input');
    const increase = page.getByRole('button', { name: 'Increase Value' });
    const decrease = page.getByRole('button', { name: 'Decrease Value' });
    await increase.click();
    await increase.click();

    // 检查商品数量是否为3
    test.expect(await number.inputValue()).toBe('3');

    // 模拟减少商品数量操作并检查数量是否为2
    await decrease.click();
    test.expect(await number.inputValue()).toBe('2');

    // 修改商品数量为10并检查是否为10
    await number.fill('10');
    test.expect(await number.inputValue()).toBe('10');
  });

  // 测试购物车结算时是否有提示
  test('购物车结算的时候应当有提示', async ({ page }) => {
    // 进行结算操作并检查确认模态框是否可见
    await checkout(page);
    const confirmModal = page.locator('.ant-modal-content');
    await test.expect(confirmModal).toBeVisible();
  });

  // 测试结算窗口是否能够取消
  test('结算窗口应当能够取消', async ({ page }) => {
    // 进行结算操作并检查确认模态框是否可见
    await checkout(page);
    const confirmModal = page.locator('.ant-modal-content');
    await test.expect(confirmModal).toBeVisible();

    // 点击取消按钮并检查确认模态框是否隐藏
    const cancel = page.getByRole('button', { name: '取 消' });
    await cancel.click();
    await test.expect(confirmModal).not.toBeVisible();

    // 检查购物车内容是否保持
    await productShouldBeInCart(page);
  });

  // 测试结算后购物车是否清空
  test('结算后应当清空购物车', async ({ page }) => {
    // 进行结算操作并获取购物车中的商品
    await checkout(page);
    const productInCart = await productShouldBeInCart(page);

    // 点击确认结算并检查购物车内容是否隐藏
    const confirm = page.getByRole('button', { name: '确 定' });
    await confirm.click();
    await test.expect(productInCart).not.toBeVisible();
  });
});

// 辅助函数：添加商品并展示购物车
async function addProductAndShowCart(page: Page) {
  // 点击添加商品按钮
  const addProductBtn = page.locator('.ant-btn').first();
  await addProductBtn.click();

  // 点击购物车图标
  const cartIcon = page.getByRole('button', { name: 'shopping-cart' });
  await cartIcon.click();
}

// 辅助函数：进行结算操作
async function checkout(page: Page) {
  // 添加商品到购物车并展示购物车
  await addProductAndShowCart(page);

  // 点击结算按钮
  const checkout = page.getByRole('button', { name: '结 算' });
  await checkout.click();
}

// 辅助函数：检查购物车中是否有商品，并返回该商品元素
async function productShouldBeInCart(page: Page) {
  // 获取购物车中的商品元素并检查是否可见
  const productInCart = page.getByTestId('cart-product');
  await test.expect(productInCart).toBeVisible();

  return productInCart;
}
