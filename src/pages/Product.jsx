import { useState } from 'react'
import SingleProduct from '../components/SingleProduct'
import { useSelector } from 'react-redux'




const Product = () => {

  const product = useSelector(p => p.product.items || p.product);
  const category = useSelector(p => p.category.items || p.category);

  // Konsola baxıb datanın gəldiyini yoxlayaq:
  console.log("Məhsullar gəldi:", product);
  console.log("Kateqoriyalar gəldi:", category);

  // const { products, setProducts } = useContext(ProductContext)
  const [selectedCategory, setSelectedCategory] = useState([])


  const checkboxOrganizer = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter(c => c !== category))
    }
    else {
      setSelectedCategory([...selectedCategory, category]) // ... mene arrayi yox arrayin icindeki butun datalari getirir
      // selectedCategory => ["cat1", "cat2", "cat3"]
      // ...selectedCategory => "cat1", "cat2", "cat3"
    }
  };

  const filteredProducts = selectedCategory.length === 0
    ? product
    : product.filter(p => selectedCategory.includes(p.category));

  // selectedCategory = ["cat1", "cat5"]
  // products = 10 dene mehsul onlardan 2sinin categorysi cat1 di, 3 nunki cat5di
  //

  console.log("Məhsullar:", product);
  console.log("Kateqoriyalar:", category);
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-2">
          {category && category.length > 0 ? (
            category.map((cat) => (
              // 1. key üçün unikal cat.id istifadə edirik
              <div className="col-12" key={cat.id}>
                <label style={{ display: 'flex', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    // 2. Filterləmə üçün cat.title (və ya obyektindəki ad nədirsə o)
                    checked={selectedCategory.includes(cat.title)}
                    onChange={() => checkboxOrganizer(cat.title)}
                  />
                  {/* 3. BURADA ƏN VACİB MƏQAM: {cat} yox, {cat.title} yazırıq */}
                  <p>{cat.title}</p>
                </label>
              </div>
            ))
          ) : (
            <p>Kateqoriya yüklənir...</p>
          )}
        </div>

        <div className="col-10">
          <div className="row g-5">
            {filteredProducts.map(item => (
              <SingleProduct
                key={item.id}
                items={item}
                // SingleProduct-un daxilində ehtiyacın olan digər propları da ötürürük
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product