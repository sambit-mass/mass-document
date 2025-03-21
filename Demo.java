
public class Demo {

	public static void main(String[] args) {
		int dosa=135;
		int total=4;
		
		int pay = dosa*total;
		System.out.println("Total dosa price = "+pay);
		float gsttotal = pay*(18/100f);
		
		double totalpay = pay+gsttotal;
		System.out.println("Total GST = "+gsttotal);
		System.out.println("one dosa+gst price = "+totalpay/4);
		

	}

}
