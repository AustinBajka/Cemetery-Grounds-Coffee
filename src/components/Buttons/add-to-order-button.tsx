'use client';
const AddToOrderButton = ({itemName}: {itemName: string}) => {
  return (
        <button className="bg-gradient-to-b from-green-200 to-green-300 h-11  p-2 rounded max-w-max text-brown-800 font-bold" onClick={() => alert(`${itemName} added to cart`)}>Add  to Order
        </button>
  )
}

export default AddToOrderButton;