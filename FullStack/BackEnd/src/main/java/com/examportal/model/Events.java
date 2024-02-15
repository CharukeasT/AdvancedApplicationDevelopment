package com.examportal.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="event")
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer eventid;
    @Column
    private String type;
    @Column
    private String description;
    @Column
    private Integer totalPackage;
    @Column
    private Integer participantsCount;
    @Column
    private Integer charges;
    
}