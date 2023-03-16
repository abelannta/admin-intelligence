import { useState } from "react";

interface SelectProps {
  index: number;
  storingSelect: (index: number, value: number) => void;
  value: number;
  typeValue?: number;
}

const typeList = [
  {
    id: 1,
    name: "Tes Potensi Skolastik (TPS)",
  },
  {
    id: 2,
    name: "Tes Literasi",
  },
];

const mapelList = [
  {
    id: 1,
    name: "Kemampuan dan Penalaran Umum",
    type: 1,
  },
  {
    id: 2,
    name: "Pengetahuan dan Pemahaman Umum",
    type: 1,
  },
  {
    id: 3,
    name: "Kemampuan Memahami Bacaan dan Menulis",
    type: 1,
  },
  {
    id: 4,
    name: "Kemampuan Memahami Bacaan dan Menulis",
    type: 1,
  },
  {
    id: 5,
    name: "Literasi dalam Bahasa Indonesia",
    type: 2,
  },
  {
    id: 6,
    name: "Literasi dalam Bahasa Inggris",
    type: 2,
  },
  {
    id: 7,
    name: "Penalaran Matematika",
    type: 2,
  },
];

export const TipeSelect = (props: SelectProps) => {
  const [type, setType] = useState(typeList);
  const { storingSelect, index, value } = props;

  return (
    <>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => storingSelect(index, parseInt(e.target.value))}
        defaultValue={value}
      >
        <option value={0} disabled>
          Tipe
        </option>
        {type.map((item, i) => (
          <option value={item.id} key={i}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export const MapelSelect = (props: SelectProps) => {
  const [mapel, setMapel] = useState(mapelList);
  const { storingSelect, index, value, typeValue } = props;

  return (
    <>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => storingSelect(index, parseInt(e.target.value))}
        defaultValue={value}
      >
        <option value={0} disabled>
          Mapel
        </option>
        {mapel
          .filter((item) => item.type === typeValue)
          .map((item, i) => (
            <option value={item.id} key={i}>
              {item.name}
            </option>
          ))}
      </select>
    </>
  );
};
