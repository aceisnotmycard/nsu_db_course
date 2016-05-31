package com.github.aceisnotmycard.repositories.entities;

public interface BaseEntity<T extends BaseEntity<T>> {
    void copy(T entity);
}
