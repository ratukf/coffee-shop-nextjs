import { useAtom } from 'jotai';
import { FaCcVisa, FaCcMastercard, FaGoogleWallet, FaMoneyBillWave } from "react-icons/fa";

import OptionButton from "coffee/components/common/OptionButton"
import { selectedPaymentMethodAtom } from 'coffee/store/PaymentMethodAtom';

export default function PaymentMethod() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useAtom(selectedPaymentMethodAtom);
    console.log("selectedPaymentMethod: ", selectedPaymentMethod);

    const handleSelectPayment = (value: string) => {
        setSelectedPaymentMethod(value);
        console.log("handleSelectPayment: ", value);
    };

    return (
        <div className="flex flex-col space-y-4 my-4">
            <div>
                <h2 className="text-lg font-semibold">Payment Method</h2>
            </div>
            <OptionButton
                name="paymentMethod"
                value="card"
                id="credit-debit-card"
                onClick={() => handleSelectPayment("card")}
                isActive={selectedPaymentMethod === "card"}
            >
                <div className="flex justify-between">
                    <div>
                        <h2>Credit/DebitCard</h2>
                        <p>Pay with visa or mastercard</p>
                    </div>
                    <div>
                        <FaCcVisa size={32} />
                        <FaCcMastercard size={32} />
                    </div>
                </div>
            </OptionButton>

            <OptionButton
                name="paymentMethod"
                value="google-wallet"
                id="google-wallet"
                onClick={() => handleSelectPayment("google-wallet")}
                isActive={selectedPaymentMethod === "google-wallet"}
            >
                <div className="flex justify-between">
                    <div>
                        <h2>Google Wallet</h2>
                        <p>Pay with google wallet</p>
                    </div>
                    <div>
                        <FaGoogleWallet size={32} />
                    </div>
                </div>
            </OptionButton>

            <OptionButton
                name="paymentMethod"
                value="cash"
                id="cash"
                onClick={() => handleSelectPayment("cash")}
                isActive={selectedPaymentMethod === "cash"}
            >
                <div className="flex justify-between">
                    <div>
                        <h2>Cash</h2>
                        <p>Pay with cash while items arrived</p>
                    </div>
                    <div>
                        <FaMoneyBillWave size={32} />
                    </div>
                </div>
            </OptionButton>
        </div>
    )
}