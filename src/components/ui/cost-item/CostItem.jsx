import {StyledCostItemDescription, StyledCostItem} from './style';
import {Date} from '../date/Date';
import {Price} from '../price/Price';
import {CostTitle} from '../cost-title/CostTitle';

export function CostItem({dataCost}) {
  return (
    <StyledCostItem key={dataCost.title}>
      <Date date={dataCost.date}></Date>
      <StyledCostItemDescription>
        <Price price={dataCost.price}></Price>
        <CostTitle title={dataCost.title}></CostTitle>
      </StyledCostItemDescription>
    </StyledCostItem>
  );
}
