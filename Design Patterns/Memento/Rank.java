package com.Nisal.Memento;

public class Rank {

    protected int performance;
    protected HealthState health;
    protected String rank;

    public Rank(int performance, HealthState health ) {
        this.performance = performance;
        this.health = health;

        rankGenerator();
    }

    @Override
    public String toString() {
        return "Rank{" +
                ", rank='" + rank + '\'' +
                '}';
    }

    //this method will generate the rank based on performance and health state
    public void rankGenerator(){

        if (performance > 80 && health == HealthState.HEALTHY)
            rank = "Excellent";
        else if (performance > 80 && health == HealthState.UNHEALTHY)
            rank = "Good";
        else if (performance > 50 && health == HealthState.HEALTHY)
            rank = "Average";
        else if (performance > 50 && health == HealthState.UNHEALTHY)
            rank = "Poor";
        else
            rank = "Very Poor";
    }
}
