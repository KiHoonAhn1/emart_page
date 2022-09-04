class ProductRepository {
  getProducts() {
    let result = '';
    fetch('https://kihoonahn1.github.io/emart/images/products.json')
      .then(res => res.json())
      .then(res => res["data"])
      .then(res => {
        console.log('??')
        return res;
      })

    // const result = await data.json();
    return result;
  }

  async getMenus() {
    const data = await fetch('https://kihoonahn1.github.io/emart/menus.json');
    const result = await data.json();
    return result["data"];
  }
}

export default ProductRepository;