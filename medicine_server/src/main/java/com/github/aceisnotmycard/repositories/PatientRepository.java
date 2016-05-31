package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.Optional;
import java.util.Set;

/**
 * Created by sergey on 24/05/16.
 */
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Optional<Patient> findByName(String name);
}
