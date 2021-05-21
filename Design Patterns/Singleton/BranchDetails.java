public class BranchDetails{

	public String branchLocation = "Bentota";
	public int branchCode = 199;
	public boolean superBranch = false;

	private static volatile BranchDetails bDetails = new BranchDetails();
	
	private BranchDetails(){
		if(bDetails != null){
		throw new RuntimeException("Please use getBranchDetails method");
		}
	}

	public static BranchDetails getBranchDetails(){

		if(bDetails == null){
		
		synchronized (BranchDetails.class){
		if(bDetails == null){
		
		bDetails = new BranchDetails();
		}
		}
		}
	return bDetails;
	}

}