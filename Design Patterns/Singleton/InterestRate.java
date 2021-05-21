public class InterestRate{

	private static volatile InterestRate iRate;
	private static volatile BranchDetails branchD;
	
	private InterestRate(){
		if(iRate != null){
		throw new RuntimeException("Please use getInterestRate method");
		}
	}

	public static InterestRate getInterestRate(){

		if(iRate == null){
		
		synchronized (InterestRate.class){
		if(iRate == null){
		
		iRate = new InterestRate();
		}
		}
		}
	return iRate;
	}

	//Method to return an object of BranchDetails
	public BranchDetails getBranchDetails(){
	
	branchD = BranchDetails.getBranchDetails();	
	return branchD;
	}

}