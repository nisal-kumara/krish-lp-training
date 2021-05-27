package com.Nisal.Memento;

import java.util.ArrayList;

//Originator class
public class Player {

    private ArrayList<Rank> rankList = new ArrayList<>();

    public void addRank(Rank rank){
        rankList.add(rank);
    }

    public ArrayList<Rank> getRankList() {
        //used clone() method to prevent the referring to original arraylist
        return (ArrayList) rankList.clone();
    }

    //retuning current state to the care taker (RankHistory)
    public RankMemento saveRank(){
        return new RankMemento(getRankList());
    }

    public void revertRank(RankMemento rankMemento){
        rankList = rankMemento.getRankList();
    }

    @Override
    public String toString() {
        return "Player{" +
                "rankList=" + rankList +
                '}';
    }

    //Memento class
    static class RankMemento{

        ArrayList<Rank> rankList;

        public RankMemento(ArrayList<Rank> players) {
            this.rankList = players;
        }

        private ArrayList<Rank> getRankList() {
            return rankList;
        }
    }
}
