import {CostItemDescription, StyledCostItem} from './style';
import Date from '../date/Date';
import Price from '../price/Price';
import CostTitle from '../cost-title/CostTitle';

export default function CostItem({costs}) {
  return costs.map((item) => {
    return (
      <StyledCostItem key={item.title}>
        <Date data={item.data}></Date>
        <CostItemDescription>
          <Price price={item.price}></Price>
          <CostTitle title={item.title}></CostTitle>
        </CostItemDescription>
      </StyledCostItem>
    );
  });
}
