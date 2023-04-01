import { useState } from "react";
import { typeList, mapelList } from "@/lib/tryout/type";

interface SelectProps {
  index: number;
  storingSelect: (index: number, value: number) => void;
  value: number;
  typeValue?: number;
}

export const TipeSelect = (props: SelectProps) => {
  const [type, setType] = useState(typeList);
  const { storingSelect, index, value } = props;

  return (
    <>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => storingSelect(index, parseInt(e.target.value))}
        defaultValue={value}
        required
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
        required
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
