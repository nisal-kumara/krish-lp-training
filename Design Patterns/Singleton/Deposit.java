public class Deposit{

	public static void main(String[] args){

	//1st instance of the InterestRate class
	InterestRate interestR = InterestRate.getInterestRate();
	System.out.println(interestR);

	//Creating 1st instance of the BranchDetails class, using "interestR" instance
	BranchDetails bDetail = interestR.getBranchDetails();
	System.out.println(bDetail + " " + bDetail.branchLocation);

	//2nd instance of the InterestRate class
	InterestRate interestR2 = InterestRate.getInterestRate();
	System.out.println(interestR2);

	//Creating 2nd instance of the BranchDetails class, using "interestR2" instance
	BranchDetails bDetail2 = interestR2.getBranchDetails();
	System.out.println(bDetail2 + " " + bDetail2.branchLocation);
}
}