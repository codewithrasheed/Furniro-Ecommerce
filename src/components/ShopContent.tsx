import React, { useEffect, useState} from "react";
import Support from "@/components/Support";
import PageBanner from "@/components/PageBanner";
import ShopProducts from "@/components/ShopProducts";
import { getProducts } from "@/sanity/sanity.query";
import { Spinner } from "@nextui-org/spinner";
import { Grid2X2, List, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSearchParams } from "next/navigation";

const ShopContent: React.FC = () => {
  const [product, setProduct] = useState<any>([]);
  const [loader, setLoader] = useState(true);
  const [filterProducts, setFilterProducts] = useState<any[]>([]);
  const [sortOptions, setSortOptions] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoader(true);
        const fetchedProducts = await getProducts();
        setProduct(fetchedProducts);
        setFilterProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoader(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = product.filter((p: any) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilterProducts(filtered);
    } else {
      setFilterProducts(product);
    }
  }, [searchQuery, product]);

  const handleSort = (e: any) => {
    const value = e.target.value;
    setSortOptions(value);

    const sortedProducts = [...product];
    if (value === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    else if (value === "Default") {
      setFilterProducts(product);
      return;
    }
    setFilterProducts(sortedProducts);
  };

  const totalPages = Math.ceil(filterProducts.length / productsPerPage);
  const displayedProducts = filterProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  return (
    <>
      <PageBanner title={"Shop"} desc={"Home > Shop"} />
      {/* <ShopFilter /> */}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 mt-0 rounded-sm bg-[#F9F1E7]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-4 sm:mb-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-base font-normal hover:bg-transparent hover:text-black/80 sm:hidden"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="icon">
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            className="hidden sm:flex items-center gap-2 text-base font-normal hover:bg-transparent hover:text-black/80"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filter
          </Button>
          <div className="flex items-center gap-2 sm:border-l sm:border-gray-200 sm:pl-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent hover:text-black/80"
            >
              <Grid2X2 className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent hover:text-black/80"
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
          <span className="text-sm text-gray-600 hidden sm:inline">
            Showing 1-16 of 32 results
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm">Sort by</span>
            <select
              className="border px-4 py-1 rounded text-gray-600"
              aria-label="Sort products"
              value={sortOptions}
              onChange={handleSort}
            >
              <option value={"Default"}>Default</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container m-auto px-4 py-8 w-full">
        {loader ? (
          <div className="flex justify-center items-center">
            <Spinner size="lg" label="Loading..." />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((item: any, index: number) => (
                <ShopProducts key={index} {...item} />
              ))
            ) : (
              <p className="text-center col-span-full">
                No products found for "{searchQuery}"
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        <ul className="flex space-x-5 justify-center font-[sans-serif]">
          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`flex items-center justify-center shrink-0 cursor-pointer text-[20px] px-[13px] h-9 rounded-md ${
                currentPage === index + 1 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-black"
              }`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Support />
      </div>
    </>
  );
};

export default ShopContent;