package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.Operation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperationRepository extends JpaRepository<Operation, Integer> {
}
