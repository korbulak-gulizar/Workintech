import CategoryList from './CategoryList';

export default function SideBar() {
  /* ADIM 1: Bir state tanımlayabilirsin */
  /* ADIM 2: kategorileri buradan alıp CategoryList'e yollayabilirsin: https://fakestoreapi.com/products/categories */

  return (
    <>
      <div className="side-container">
        <h2>Categories</h2>
        <CategoryList />
      </div>
    </>
  );
}
