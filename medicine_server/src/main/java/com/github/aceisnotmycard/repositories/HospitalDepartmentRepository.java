package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.HospitalDepartment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalDepartmentRepository extends JpaRepository<HospitalDepartment, Integer> {
}
