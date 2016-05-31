package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="medical_records")
public class MedicalRecord implements BaseEntity<MedicalRecord> {

    public Integer getId() {
        return id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToMany
    @JoinColumn(name = "doctor_id")
    private Set<Doctor> doctors = new HashSet<>();

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    @Column(name="temperature")
    private Float temperature;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    public MedicalRecord() {
    }

    public MedicalRecord(Patient patient, Room room, Float temperature, Date startDate, Date endDate, Set<Doctor> doctors) {
        this.patient = patient;
        this.room = room;
        this.temperature = temperature;
        this.startDate = startDate;
        this.endDate = endDate;
        this.doctors = doctors;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Float getTemperature() {
        return temperature;
    }

    public void setTemperature(Float temperature) {
        this.temperature = temperature;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Override
    public void copy(MedicalRecord entity) {
        setStartDate(entity.getStartDate());
        setEndDate(entity.getEndDate());
        setPatient(entity.getPatient());
        setRoom(entity.getRoom());
        setTemperature(entity.getTemperature());
        setDoctors(entity.getDoctors());
    }
}
