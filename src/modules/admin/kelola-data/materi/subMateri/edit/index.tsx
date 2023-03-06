import AdminBasePage from "@/modules/basePage";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const EditSubMateriSection = dynamic(
  () =>
    import(
      "@/modules/admin/kelola-data/materi/subMateri/edit/components/editSection"
    ),
  {
    ssr: false,
  }
);

export const EditSubMateri = () => {
  const [formData, setFormData] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  const addSlide = (e: any) => {
    e.preventDefault();
    setFormData((prev) => {
      return [
        ...prev,
        {
          title: "",
          content: "",
        },
      ];
    });
  };

  const deleteSlide = (e: any, index: number) => {
    e.preventDefault();
    const deletedSlide = [...formData];
    deletedSlide.splice(index, 1);
    setFormData(deletedSlide);
  };

  const storingTitle = (index: number, value: string) => {
    setFormData((prev) => {
      const newArr = prev.slice();
      newArr[index].title = value;

      return newArr;
    });
  };

  const storingContent = (index: number, value: string) => {
    setFormData((prev) => {
      const newArr = prev.slice();
      newArr[index].content = value;

      return newArr;
    });
  };

  useEffect(() => console.log(formData), [formData]);

  return (
    <AdminBasePage title="Kelola Data Materi | Edit Sub Materi">
      <h1 className="font-bold text-xl mb-10">Edit Bakteri dan Virus</h1>
      <form>
        {formData.map((item, i) => (
          <EditSubMateriSection
            index={i}
            key={i}
            deleteSlide={deleteSlide}
            storingTitle={storingTitle}
            storingContent={storingContent}
            title={item.title}
            content={item.content}
          />
        ))}
        <button
          onClick={(e) => addSlide(e)}
          className="btn bg-gray-200 text-black hover:bg-slate-300 border-none mr-3"
        >
          <FaPlus className="w-3 h-3 mr-3" />
          Tambah
        </button>
      </form>
    </AdminBasePage>
  );
};
