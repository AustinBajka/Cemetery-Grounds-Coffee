
const ItemDetailPage = async ({params}: { params: Promise<{ item: string}> }) => {
  /* 
   NOTE - params are now async, previously synchronous in 14. Now async
   Getting it this way allows you to keep this a server component.
  */

  const slug = (await params).item;
              {/* TODO: Make sure to write a function for converting the %- to a space  */}

  return (
    <div>
      <h1 className="text-lg text-green-600">{slug}</h1>
    </div>
  )
}

export default ItemDetailPage