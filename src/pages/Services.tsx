import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Services as ServicesList } from '../components/sections/Services';
import { ServiceDetail } from '../components/sections/ServiceDetail';
import { servicesData, ServiceDetail as ServiceType } from '../data/services';

export default function Services() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

    // Sync URL param with Modal State
    useEffect(() => {
        const serviceId = searchParams.get('open');
        if (serviceId) {
            const service = servicesData.find(s => s.id === serviceId);
            if (service) {
                setSelectedService(service);
            }
        } else {
            setSelectedService(null);
        }
    }, [searchParams]);

    const handleOpenService = (serviceId: string) => {
        // Update URL to trigger the effect
        setSearchParams({ open: serviceId });
    };

    const handleCloseService = () => {
        // Remove param from URL
        setSearchParams({});
    };

    return (
        <>
            <ServicesList onOpenService={handleOpenService} />
            {selectedService && (
                <ServiceDetail service={selectedService} onClose={handleCloseService} />
            )}
        </>
    );
}
