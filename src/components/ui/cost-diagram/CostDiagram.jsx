import {Diagram} from '../diagram/Diagram';

export function CostDiagram({filterCosts}) {
  const monthData = [
    {
      label: 'Январь',
      value: 0,
    },
    {
      label: 'Февраль',
      value: 0,
    },
    {
      label: 'Март',
      value: 0,
    },
    {
      label: 'Апрель',
      value: 0,
    },
    {
      label: 'Май',
      value: 0,
    },
    {
      label: 'Июнь',
      value: 0,
    },
    {
      label: 'Июль',
      value: 0,
    },
    {
      label: 'Август',
      value: 0,
    },
    {
      label: 'Сентябрь',
      value: 0,
    },
    {
      label: 'Октябрь',
      value: 0,
    },
    {
      label: 'Ноябрь',
      value: 0,
    },
    {
      label: 'Декабрь',
      value: 0,
    },
  ];

  filterCosts.forEach((item) => {
    const costMonth = item.date.getMonth();

    monthData[costMonth].value += item.price;
  });

  return <Diagram monthCosts={monthData}></Diagram>;
}
