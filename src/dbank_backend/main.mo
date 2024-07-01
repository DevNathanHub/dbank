import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor DBank{
    stable var currentValue: Float = 0;
    // currentValue := 0;
    stable var startTime = Time.now();

    Debug.print(debug_show(startTime));

    public func deposit(amount: Float){
        currentValue += amount;
        Debug.print(debug_show(currentValue));

    };

    public func withdraw(amount: Float){
        var tempAmount = currentValue - amount;

        if(tempAmount >= 0){
            currentValue -= amount;
            Debug.print(debug_show(currentValue));
            
        } else{
            Debug.print("Insufficient Balance");
            return;
        };

        
    };
    public query func checkBalance(): async Float{
        return currentValue;
    };
   public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    let annualRate = 0.60; // 60% annual interest rate just to be noticeable
    let ratePerSecond = annualRate / (365 * 24 * 60 * 60);
    currentValue := currentValue * ((1 + ratePerSecond) ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
};


}