import { sneaker } from "./Mock"

function Info(){
    return(
        <div>
            {sneaker.map((item, id) => {
                return (
                    <div key = {id} className="font-display w-96">
                        <span className="text-amber-600 tracking-widest uppercase">{item.brand}</span>
                        <h2 className="font-display text-5xl mb-8 mt-7">{item.productName}</h2>
                        <p className="font-display mb-6">{item.description}</p>
                        <div>
                            <p className="flex content-center">
                                <span className="text-3xl">$ {item.discountPrice}.00{" "}</span>
                                <span className="p-2 bg-amber-200 text-amber-500 rounded-md ml-6">{item.discout}%</span>
                            </p>
                            <p>
                                <s className="font-display">$ {item.initialPrice}.00</s>
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Info