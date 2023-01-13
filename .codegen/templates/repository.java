package com.example.demo.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import com.example.demo.domain.model.*;

@Repository
public interface EntityRepository extends JpaRepository<Entity, Long> {
}
