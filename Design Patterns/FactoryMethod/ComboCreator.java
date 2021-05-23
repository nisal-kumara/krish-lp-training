package FactoryDesignPattern;

public class ComboCreator {

    public static Combos createComobos(ComboCode comboCode){

        switch (comboCode){
            case LITE:
                System.out.println("Selected Combo: LiteCombo \n");
                return new LiteCombo();
            case FAMILY:
                System.out.println("Selected Combo: FamilyCombo \n");
                return new FamilyCombo();
            case MEGA:
                System.out.println("Selected Combo: MegaCombo \n");
                return new MegaCombo();
            default:
                return null;
        }

    }
}
