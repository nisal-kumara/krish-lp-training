package com.nisal.model.customer;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "loyalityPoint")
@Data
public class Loyality {

    @Id
    @GeneratedValue
    int transactionId;

    @ManyToOne
    @JoinColumn
    Customer customer;
    int point;
    LocalDateTime expireDate;
}
