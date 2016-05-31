package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;

@Entity
@Table(name = "department_rooms")
public class Room implements BaseEntity<Room> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="room_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name="department_id", nullable = false)
    private HospitalDepartment department;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    public Room(HospitalDepartment department, String name, Integer capacity) {
        this.department = department;
        this.name = name;
        this.capacity = capacity;
    }

    public Room() {
    }

    @Override
    public void copy(Room entity) {
        this.setDepartment(entity.getDepartment());
        this.setName(entity.getName());
        this.setCapacity(entity.getCapacity());
    }

    public Integer getId() {
        return id;
    }

    public HospitalDepartment getDepartment() {
        return department;
    }

    public void setDepartment(HospitalDepartment department) {
        this.department = department;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }
}
