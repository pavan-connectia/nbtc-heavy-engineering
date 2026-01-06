import React from "react";
import { Head, MaxContainer } from "@/components";
import { useParams } from "react-router-dom";
import EquipmentCard from "@/components/core-business/EquipmentCard";
import { useGetFacilityByDeptIdQuery } from "@/redux/api/facilityApi";
import FacilityCard from "@/components/comman/FacilityCard";

const CategoryEquipment = () => {
  const { data } = useGetFacilityByDeptIdQuery();
  return (
    <>
      <Head
        title={data?.data?.seo?.title || "Equipments | NBTC"}
        description={data?.data?.seo?.metaDescription || ""}
        canonical={data?.data?.seo?.canonicalUrl}
        ogUrl={data?.data?.seo?.ogUrl}
        ogImage={data?.data?.seo?.ogImage}
        keywords={data?.data?.seo?.metaKeywords}
      />

      <MaxContainer className="flex flex-wrap justify-center gap-5 px-5 py-10 sm:px-8">
        {data?.data?.map((d) => (
          <FacilityCard facility={d} key={d?._id} />
        ))}
      </MaxContainer>
    </>
  );
};

export default CategoryEquipment;
