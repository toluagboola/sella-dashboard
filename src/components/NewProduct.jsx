import React, { useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";

function NewProduct() {
  const { currentColor, setProduct, setProductForm } = useStateContext();

  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const descRef = useRef();
  const fileRef = useRef();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      name: nameRef.current.value,
      price: `$${priceRef.current.value}`,
      quantity: quantityRef.current.value,
      description: descRef.current.value,
      image: await convertToBase64(fileRef.current.files[0]),
    };

    setProduct(product);
    setProductForm(false);
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-half-transparent"
        onClick={() => setProductForm(false)}
      ></div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-6 mx-auto bg-white dark:bg-[#42464D] rounded-md shadow-lg">
          <div className="my-2 text-center sm:text-left">
            <p className="text-2xl font-extrabold text-slate-900 dark:text-gray-200 pb-2 border-b-1">
              New Product
            </p>

            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="w-full mb-4">
                <label
                  htmlFor="name"
                  className="text-gray-600 dark:text-gray-200 font-bold"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  ref={nameRef}
                  placeholder="Product name"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out mt-2 focus:text-gray-700 focus:bg-white focus:border-gray-400 border-opacity-95 focus:outline-none"
                />
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="price"
                  className="text-gray-600 dark:text-gray-200 font-bold"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  ref={priceRef}
                  placeholder="How mucn is this product?"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out mt-2 focus:text-gray-700 focus:bg-white focus:border-gray-400 border-opacity-95 focus:outline-none"
                />
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="quantity"
                  className="text-gray-600 dark:text-gray-200 font-bold"
                >
                  Current Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  ref={quantityRef}
                  placeholder="How many pieces are in stock?"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out mt-2 focus:text-gray-700 focus:bg-white focus:border-gray-400 border-opacity-95 focus:outline-none"
                />
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="description"
                  className="text-gray-600 dark:text-gray-200 font-bold"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  type="text"
                  ref={descRef}
                  placeholder="Describe the product"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out mt-2 focus:text-gray-700 focus:bg-white focus:border-gray-400 border-opacity-95 focus:outline-none"
                ></textarea>
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="image"
                  className="text-gray-600 dark:text-gray-200 font-bold"
                >
                  Product Image
                </label>
                <input
                  id="image"
                  type="file"
                  ref={fileRef}
                  accept=".jpeg, .png, .jpg, .webp"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out mt-2 focus:text-gray-700 focus:bg-white focus:border-gray-400 border-opacity-95 focus:outline-none"
                />
              </div>

              <div className="items-center gap-2 mt-3 sm:flex">
                <button
                  type="submit"
                  className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 focus:ring-2"
                  style={{ backgroundColor: currentColor }}
                >
                  Save
                </button>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 focus:ring-2"
                  onClick={() => setProductForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
