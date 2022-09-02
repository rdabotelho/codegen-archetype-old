package com.example.demo.service;

import com.example.demo.domain.model.DomainName;
import com.example.demo.repository.DomainNameRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class DomainNameService {

    @Autowired
    private DomainNameRepository domainNameRepository;

    public Optional<DomainName> createDomainName(DomainName domainName) {
        return Optional.of(this.domainNameRepository.save(domainName));
    }

    public Optional<DomainName> updateDomainName(DomainName domainName) {
        return Optional.of(this.domainNameRepository.save(domainName));
    }

    public List<DomainName> getAllDomainNames() {
        return this.domainNameRepository.findAll();
    }

    public Optional<DomainName> getDomainNameById(Long id) {
        return this.domainNameRepository.findById(id);
    }

    public void deleteDomainName(Long id) {
        this.domainNameRepository.deleteById(id);
    }

}
