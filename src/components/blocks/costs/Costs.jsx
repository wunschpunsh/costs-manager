import {StyledCosts, StyledCostsContainer} from './style';
import {Container} from '../../ui/container/Container';
import {CostItem} from '../../ui/cost-item/CostItem';
import {NewCost} from '../../ui/new-cost/NewCost';
import {FilterCost} from '../../ui/cost-filter/FilterCost';
import {useState} from 'react';
import {EmptyCosts} from '../../ui/empty-costs/EmptyCosts';
import {CostDiagram} from '../../ui/cost-diagram/CostDiagram';

export function Costs({costs, showNewCost, setShowNewCost}) {
  const [currentCosts, setCurrentCosts] = useState(costs);
  const [optionYear, setOptionYear] = useState('2023');

  const provideNewCostDataHandler = (value) => {
    setCurrentCosts((prev) => {
      return [value, ...prev];
    });
  };

  const onSaveFilterYear = (value) => {
    setOptionYear(value);
  };

  const filterCosts = currentCosts.filter((cost) => {
    return cost.date.getFullYear().toString() === optionYear;
  });

  return (
    <StyledCosts>
      <Container>
        {showNewCost ? (
          <NewCost
            onProvideCostData={provideNewCostDataHandler}
            setShowNewCost={setShowNewCost}
          ></NewCost>
        ) : null}

        <StyledCostsContainer>
          <FilterCost
            onProvideYearData={onSaveFilterYear}
            defaultValue={optionYear}
          ></FilterCost>
          <CostDiagram filterCosts={filterCosts}></CostDiagram>
          {filterCosts.length === 0 ? (
            <EmptyCosts></EmptyCosts>
          ) : (
            filterCosts.map((item) => (
              <CostItem key={item.title} dataCost={item}></CostItem>
            ))
          )}
        </StyledCostsContainer>
      </Container>
    </StyledCosts>
  );
}
