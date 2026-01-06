import React from "react";
import { Head, MaxContainer } from "@/components";
import ServicesCard from "@/components/comman/ServicesCard";
import { useGetServiceByDeptIdQuery } from "@/redux/api/serviceApi";

const Services = () => {
  const { data } = useGetServiceByDeptIdQuery();
  return (
    <>
      <Head
        title={data?.data?.seo?.title || "Services | NBTC"}
        description={data?.data?.seo?.metaDescription || ""}
        canonical={data?.data?.seo?.canonicalUrl}
        ogUrl={data?.data?.seo?.ogUrl}
        ogImage={data?.data?.seo?.ogImage}
        keywords={data?.data?.seo?.metaKeywords}
      />

      <MaxContainer className="flex flex-wrap justify-center gap-5 px-5 py-10 sm:px-8">
        {data?.data?.map((d) => (
          <ServicesCard service={d} key={d?._id} />
        ))}
      </MaxContainer>
    </>
  );
};

export default Services;
