import Category from './Category.jsx';
export default function CategoryList() {
  /* ADIM 2: categorileri prop olarak alabilirsin */
  return (
    <>
      {[].map((item, index) => (
        <Category category={item} key={index} />
      ))}
    </>
  );
}
