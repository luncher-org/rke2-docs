---
title: Metrics
---

import Label from '@site/src/components/Label';

RKE2 provides metrics for monitoring the health and performance of the cluster.

Individual components provide most metrics. See the following component-specific documentation for more information:
* [CoreDNS metrics](https://coredns.io/plugins/metrics/)
* [etcd metrics](https://etcd.io/docs/v3.5/metrics/)
* [Kubernetes node metrics](https://kubernetes.io/docs/reference/instrumentation/node-metrics/)
* [Kubernetes component metrics](https://kubernetes.io/docs/reference/instrumentation/metrics/)

Other components may provide additional metrics. Consult the upstream project documentation for any components not listed above.

## Supervisor Metrics

When you start RKE2 with `supervisor-metrics: true`, the RKE2 supervisor exposes metrics. You can access these metrics through the `/metrics` endpoint on each node at port `9345`:

```sh
kubectl get --server https://NODENAME:9345 --raw /metrics
```

Metrics exposed by the RKE2 supervisor process include:
* [RKE2 Cluster Management Metrics](#rke2-cluster-management-metrics)
* [Lasso controller metrics](https://github.com/rancher/lasso/blob/main/README.md#lasso-controller)
* [Kubernetes client and workqueue metrics](https://github.com/kubernetes/client-go/blob/master/README.md)
* [Go runtime metrics](https://pkg.go.dev/runtime/metrics#hdr-Supported_metrics)
* If the RKE2 embedded registry is enabled, [Spegel metrics](https://spegel.dev/docs/metrics/) and [libp2p metrics](https://github.com/libp2p/go-libp2p/blob/master/README.md)

## RKE2 Cluster Management Metrics

### rke2_certificate_expiration_seconds

Remaining lifetime in seconds of the certificate, labeled by certificate subject and usages.
- Type: Gauge
- Labels: <Label>subject</Label> <Label>usage</Label>

### rke2_loadbalancer_server_connections

Count of current connections to the loadbalancer server, labeled by loadbalancer name and server address.
- Type: Gauge
- Labels: <Label>name</Label> <Label>server</Label>

### rke2_loadbalancer_server_health

Current health state of loadbalancer backend servers, labeled by loadbalancer name and server address.  

State is enum of 0=INVALID, 1=FAILED, 2=STANDBY, 3=UNCHECKED, 4=RECOVERING, 5=HEALTHY, 6=PREFERRED, 7=ACTIVE.
- Type: Gauge
- Labels: <Label>name</Label> <Label>server</Label>

### rke2_loadbalancer_dial_duration_seconds

Time in seconds taken to dial a connection to a backend server, labeled by loadbalancer name and success/failure status.
- Type: Histogram
- Labels: <Label>name</Label> <Label>status</Label>

### rke2_etcd_snapshot_save_duration_seconds

Total time in seconds taken to complete the etcd snapshot process, labeled by success/failure status.
- Type: Histrogram
- Labels: <Label>status</Label>

### rke2_etcd_snapshot_save_local_duration_seconds

Total time in seconds taken to save a local snapshot file, labeled by success/failure status.
- Type: Histrogram
- Labels: <Label>status</Label>

### rke2_etcd_snapshot_save_s3_duration_seconds

Total time in seconds taken to upload a snapshot file to S3, labeled by success/failure status.
- Type: Histrogram
- Labels: <Label>status</Label>

### rke2_etcd_snapshot_reconcile_duration_seconds

Total time in seconds taken to sync the list of etcd snapshots, labeled by success/failure status.
- Type: Histrogram
- Labels: <Label>status</Label>

### rke2_etcd_snapshot_reconcile_local_duration_seconds

Total time in seconds taken to list local snapshot files, labeled by success/failure status.
- Type: Histrogram
- Labels: <Label>status</Label>

### rke2_etcd_snapshot_reconcile_s3_duration_seconds

Total time in seconds taken to list S3 snapshot files, labeled by success/failure status.
- Type: Histrogram
- Labels: <Label>status</Label>
