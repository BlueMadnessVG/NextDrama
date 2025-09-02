import { useGetGenderSeriesList } from "@/hooks/useGetGenderSeriesList";
import { GenderList as GenderListType } from "@/interfaces/interfaces";
import GenderList from "./GenderList";

export default function GenderListView() {
  const { loading, data } = useGetGenderSeriesList();

  console.log(data);

  if (loading) {
    console.log("Loading genders...");
  } else {
    return (
      <>
        {data.map((item: GenderListType) => (
          <GenderList key={item.id} Gender={item} />
        ))}
      </>
    );
  }
}
