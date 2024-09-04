import { FaCcVisa, FaCcMastercard, FaGoogleWallet, FaMoneyBillWave } from "react-icons/fa";

import OptionButton from "coffee/components/common/OptionButton"

export default function PaymentMethod() {
    return (
        <div className="flex flex-col space-y-4">
            <div>
                <h2 className="text-lg font-semibold mt-4">Shipping Service</h2>
            </div>
            <OptionButton name="paymentMethod" value="card" id="credit-debit-card">
                <div className="flex justify-between">
                    <div>
                        <h2>Credit/DebitCard</h2>
                        <p>Pay with mastercard or American Express</p>
                    </div>
                    <div>
                        <FaCcVisa size={32} />
                        <FaCcMastercard size={32} />
                    </div>
                </div>
            </OptionButton>
            <OptionButton name="paymentMethod" value="google-wallet" id="google-wallet">
            <div className="flex justify-between">
                    <div>
                        <h2>Google Walet</h2>
                        <p>Pay with google wallet</p>
                    </div>
                    <div>
                        <FaGoogleWallet size={32} />
                    </div>
                </div>
            </OptionButton>
            <OptionButton name="paymentMethod" value="cash" id="cash">
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