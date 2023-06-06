import {StyledCostItemDescription, StyledCostItem} from './style';
import {Date} from '../date/Date';
import {Price} from '../price/Price';
import {CostTitle} from '../cost-title/CostTitle';

export function CostItem({costs}) {
  return costs.map((item) => {
    return (
      <StyledCostItem key={item.title}>
        <Date data={item.data}></Date>
        <StyledCostItemDescription>
          <Price price={item.price}></Price>
          <CostTitle title={item.title}></CostTitle>
        </StyledCostItemDescription>
      </StyledCostItem>
    );
  });
}
