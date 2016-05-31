package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by sergey on 24/05/16.
 */
public interface StaffRepository extends JpaRepository<Staff, Integer> {
}
