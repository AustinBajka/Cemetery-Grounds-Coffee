import ParagraphCopy from "@/components/Copy/Paragraph";
import PageTitle from "@/components/Copy/PageTitle";
import SectionHeader from "@/components/Copy/SectionHeader";
import CoffeeIcon from "@/images/icons8-cafe-black-50px.png";
import Image from "next/image";
import Link from "next/link";
import ItemPreview, { ItemPreviewProps } from "@/components/ItemPreview";

export default function Home() {
  // ** Variables ** //
  const ghostlyGreen600 = "green-600";

  // ** COPY ** //
  const pageTitle = 'Awaken your spirit with every sip';
  const promoSectionCopy: string = "Bold brews, spooky vibes, and treats to die for";
  const weeklyHauntsTitle = "Weekly haunts"
  const weeklyHauntsCopy: string = "Our weekly rotating specials will have you rolling in your grave if you miss out.";


  // TODO: Replace with actual promo image
  const PromoImagePlaceholders = () => {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <Image key={index} src={CoffeeIcon} alt="Ghostly green coffee" width={44} height={44} />
        ))}
      </>
    );
  }

  const ArrayOfWeeklyHaunts: ItemPreviewProps[] = [
    {
      name: "Ghostly Green Coffee",
      description: "A hauntingly good brew",
      image: CoffeeIcon,
    },
    {
      name: "Spooky Spice Latte",
      description: "A hauntingly good brew",
      image: CoffeeIcon,
    },
    {
      name: "Pumpkin Spice Latte",
      description: "A hauntingly good brew",
      image: CoffeeIcon,
    },
    {
      name: "Witch's Brew",
      description: "A hauntingly good brew",
      image: CoffeeIcon,
    },
    {
      name: "Black Magic Brew",
      description: "A hauntingly good brew",
      image: CoffeeIcon,
    },
  ];

  const CTAButton = () => {
    return (
      <Link href="/menu" className="bg-gradient-to-b from-green-200 to-green-300  p-2 rounded max-w-max text-brown-800" >Order now</Link>
    );
  }


  return (
    <>
      <div className="flex flex-col gap-3">
        <PageTitle title={pageTitle} textColor={ghostlyGreen600}/>
        <ParagraphCopy text={promoSectionCopy} textColor={ghostlyGreen600} />
        <div className="flex flex-row gap-2">
          <PromoImagePlaceholders />
        </div>
        <CTAButton />
      </div>
      <div className="flex flex-col gap-2">
        <SectionHeader title={weeklyHauntsTitle} textColor={ghostlyGreen600}/>
        <ParagraphCopy text={weeklyHauntsCopy} textColor={ghostlyGreen600} />
        <div className="flex flex-row gap-2 overflow-x-scroll">
          {ArrayOfWeeklyHaunts.map((item, index) => (
            <ItemPreview key={index} name={item.name} description={item.description} image={item.image} />
          ))}
        </div>
      </div>
    </>
  );
}
