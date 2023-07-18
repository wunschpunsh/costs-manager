import {Select} from '../select/Select';
import {
  StyledFilterCosts,
  StyledFilterCostsWrapper,
  StyledFilterCostsLabel,
} from './style';

export function FilterCost({onProvideYearData, defaultValue}) {
  const onChangeSelectHandler = (value) => {
    onProvideYearData(value);
  };

  return (
    <StyledFilterCosts>
      <StyledFilterCostsWrapper>
        <StyledFilterCostsLabel>Выбор по году</StyledFilterCostsLabel>
        <Select
          onSaveSelectChange={onChangeSelectHandler}
          defaultValue={defaultValue}
        ></Select>
      </StyledFilterCostsWrapper>
    </StyledFilterCosts>
  );
}
