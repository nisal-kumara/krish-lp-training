import java.util.*;

public class JumpingFrog{

	public static void main(String[] args){

	Scanner sc = new Scanner(System.in);
	int userIn = 0;

	while(userIn <= 0){

	try{
	System.out.print("Enter distance: ");
	userIn = sc.nextInt();
	if(userIn == 0) System.out.println("Value should be larger than 0");
	} catch(Exception e){
	sc.nextLine();
	System.out.println("Enter a valid number");
	}
	}

	int count = 0;
	int time = 0;

	while(userIn > 0){
	if(count > 0) time += 5;

	userIn -= 5;
	count++;
	
	if(userIn > 0){
		userIn -= 3;
		count++;
		time += 1;
	if(userIn > 0){
		userIn -= 1;
		count++;
		time += 2;
	}		
	}
}
	System.out.println("Tom has jumpped " + count + " times");

	if(time > 0) System.out.println("Required time: " + time / 60 + " min : " + time % 60 + " sec");
	else System.out.println("Required time: No time required");

}
}