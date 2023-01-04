import { Minus, Plus } from "phosphor-react";
import { InputQuantityContainer } from "./styles";

interface InputQuantityProps {
    quantityProduct?: any
    setQuantityProduct?: any
    defaultValue?: any
}

export function InputQuantity({ quantityProduct, setQuantityProduct, defaultValue }: InputQuantityProps) {

    function handleRemoveUnitProduct() {
        setQuantityProduct((state: number) => {
            if (state === 1) {
                return state
            } else {
                return (state - 1)
            }
        })
    }

    function handleAddUnitProduct() {
        setQuantityProduct((state: number) => (state + 1))
    }

    return (
        <InputQuantityContainer>
            <div className="input">
                <button className="minus" onClick={() => handleRemoveUnitProduct()}><Minus color="#8047F8" size={14} weight='bold' /></button>
                <input type="number" name="productQtd" readOnly id="productQtd" min={1} defaultValue={defaultValue} value={quantityProduct} onChange={(e) => setQuantityProduct(Number(e.target.value))} />
                <button className="plus" onClick={() => handleAddUnitProduct()}><Plus color="#8047F8" size={14} weight='bold' /></button>
            </div>
        </InputQuantityContainer>
    )
}