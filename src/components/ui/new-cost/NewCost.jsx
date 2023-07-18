import {Form} from '../form/Form';

export function NewCost({onProvideCostData, setShowNewCost}) {
  const saveNewCostData = (inputsData) => {
    onProvideCostData(inputsData);
  };

  return (
    <Form
      onSaveNewCostData={saveNewCostData}
      setShowNewCost={setShowNewCost}
    ></Form>
  );
}
