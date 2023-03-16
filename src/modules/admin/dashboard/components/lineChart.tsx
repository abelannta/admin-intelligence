import moment from "moment";
import React, { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";

export default function LineChart() {
  const data = useMemo(
    () => [
      {
        label: "UTBK",
        data: [
          {
            date: "Januari",
            value: 490,
          },
          {
            date: "Februari",
            value: 512,
          },
          {
            date: "Maret",
            value: 499,
          },
          {
            date: "April",
            value: 534,
          },
          {
            date: "Mei",
            value: 576,
          },
          {
            date: "Juni",
            value: 512,
          },
          {
            date: "Juli",
            value: 591,
          },
          {
            date: "Agustus",
            value: 615,
          },
          {
            date: "September",
            value: 569,
          },
          {
            date: "Oktober",
            value: 635,
          },
          {
            date: "November",
            value: 576,
          },
          {
            date: "Desember",
            value: 712,
          },
        ],
      },
    ],
    []
  );

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.date as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.value,
        elementType: "area",
      },
    ],
    []
  );

  return (
    <>
      <div className="w-full aspect-square md:aspect-video">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            tooltip: false,
          }}
        />
      </div>
    </>
  );
}
