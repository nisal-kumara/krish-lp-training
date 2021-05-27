package com.Nisal.Memento;

import java.util.Stack;

//CareTaker class
public class RankHistory {

    private Stack<Player.RankMemento> rankHistory = new Stack<>();

    public void saveRank(Player player){
        rankHistory.push(player.saveRank());
    }

    public void revertRank(Player player){
        if (!rankHistory.isEmpty()){
            player.revertRank(rankHistory.pop());
        }else{
            System.out.println("Nothing left to Undo");
        }
    }
}
