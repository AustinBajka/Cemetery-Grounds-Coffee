import Image from "next/image";
import ArrowLeft from "@/images/icons8-arrow-left-44px.png";
import PageTitle from "@/components/Copy/PageTitle";
import Link from "next/link";
import { FullItem } from "./mock-data";
import { inventory } from "./mock-data";
import AddToOrderButton from "@/components/Buttons/add-to-order-button";


// Helper Functions

export const getItemById = (id: number | string): FullItem | undefined => {
  let formattedId = id;
  if (typeof id === "string") {
    formattedId = parseInt(id, 10);
  }
  return inventory.find((item) => item.id === formattedId);
};


const ItemDetailPage = async ({params}: { params: Promise<{ item: string}> }) => {
  /* 
   NOTE - params are now async, previously synchronous in 14. Now async
   Getting it this way allows you to keep this a server component.
  */

  const slug = (await params).item;
              {/* TODO: Make sure to write a function for converting the %- to a space  */}

  const matchingItem = getItemById(slug);
  console.log(matchingItem);

  if (!matchingItem) {
    return (
      <div className="">
        <h1>Item not found</h1>
      </div>
  );
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      <Link href="/menu" className="w-fit">
        <Image src={ArrowLeft} alt="Back to Menu" width={44} height={44} className="fit-content" />
      </Link>
      <div id="item-detail-header-info" className="flex flex-row justify-between gap-3">
        <div className="flex-2">
          <PageTitle title={matchingItem.name} textColor="green-600" />
          <p className="text-sm text-brown-800">{matchingItem.description}</p>
          <h2 className="text-lg text-green-600 min-w-min">{matchingItem.calories} Calories</h2>
        </div>
        <Image src={matchingItem.image} alt={matchingItem.name} className="flex-none w-24 h-24"  />
      </div>
      <div>
        <h2 className="text-green-600 text-lg bold">Ingredients:</h2>
        <ul>
          {matchingItem.ingredients.map((ingredient, index) => {
            return(
              <div key={index} className="border-b-2 border-gray">
                <li  className="text-brown-800">{ingredient}</li>
            </div>
            )
          })}
        </ul>
      </div>
      <div className="position-absolute bottom-0">
          <AddToOrderButton itemName={matchingItem.name} />
      </div>
    </div>
  )
}

export default ItemDetailPage